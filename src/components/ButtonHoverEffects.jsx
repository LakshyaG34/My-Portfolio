import { useLayoutEffect } from "react";
import gsap from "gsap";

const BUTTON_SELECTOR =
  'button:not([disabled]):not([data-hover-effect="off"]), [role="button"]:not([aria-disabled="true"]):not([data-hover-effect="off"]), a[href][class*="bg-"]:not([data-hover-effect="off"])';

function isOpaqueBackground(color) {
  const alphaChannel = color.match(/\/\s*([\d.]+)(%)?/);
  if (alphaChannel) {
    const alpha = Number.parseFloat(alphaChannel[1]) / (alphaChannel[2] ? 100 : 1);
    return alpha >= 0.72;
  }
  const rgba = color.match(/rgba\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\s*\)/);
  const alpha = rgba ? Number.parseFloat(rgba[1]) : 1;
  return alpha >= 0.72;
}

function classifyButton(button) {
  if (button.dataset.buttonSurface) return button.dataset.buttonSurface;
  const style = getComputedStyle(button);
  const isSolid = style.backgroundImage !== "none" || isOpaqueBackground(style.backgroundColor);
  button.dataset.buttonSurface = isSolid ? "solid" : "transparent";
  return isSolid ? "solid" : "transparent";
}

function makePhrase(label, className) {
  const phrase = document.createElement("span");
  phrase.className = `button-hover-phrase ${className}`;
  phrase.setAttribute("aria-hidden", "true");
  [...label].forEach((character) => {
    const letter = document.createElement("span");
    letter.className = "button-hover-letter";
    letter.textContent = character === " " ? "\u00a0" : character;
    phrase.append(letter);
  });
  return phrase;
}

function createHoverLayer(button, currentColor, surface, currentLabel) {
  const layer = document.createElement("span");
  layer.className = "button-hover-layer";
  layer.setAttribute("aria-hidden", "true");

  const fill = document.createElement("span");
  fill.className = "button-hover-fill";
  fill.style.clipPath = surface === "solid"
    ? "circle(150% at 0% 100%)"
    : "circle(0% at 0% 100%)";
  layer.append(fill);

  const labels = document.createElement("span");
  labels.className = "button-hover-label";
  const currentPhrase = makePhrase(currentLabel, "button-hover-current");
  currentPhrase.style.color = currentColor;
  labels.append(currentPhrase);
  labels.append(makePhrase("Click ME", "button-hover-next"));
  layer.append(labels);
  button.append(layer);
  return { layer, fill, labels };
}

export default function ButtonHoverEffects() {
  useLayoutEffect(() => {
    let activeButton = null;
    const originalPositions = new WeakMap();

    const scanButtons = (root = document) => {
      if (root instanceof Element && root.matches(BUTTON_SELECTOR)) classifyButton(root);
      root.querySelectorAll?.(BUTTON_SELECTOR).forEach(classifyButton);
    };

    const restorePosition = (button) => {
      if (!originalPositions.has(button)) return;
      const [position, priority] = originalPositions.get(button);
      if (position) button.style.setProperty("position", position, priority);
      else button.style.removeProperty("position");
      originalPositions.delete(button);
    };

    const enter = (button) => {
      if (!button || button === activeButton || !button.matches(BUTTON_SELECTOR)) return;
      if (button.hasAttribute("disabled") || button.getAttribute("aria-disabled") === "true") return;
      if (activeButton) leave(activeButton);
      if (button._buttonHoverTimeline) {
        button._buttonHoverTimeline.kill();
        button._buttonHoverLayer?.remove();
        delete button._buttonHoverLayer;
        delete button._buttonHoverTimeline;
      }

      const surface = classifyButton(button);
      const currentLabel = (button.innerText || button.getAttribute("aria-label") || button.title || "Action")
        .replace(/\s+/g, " ")
        .trim();
      const currentColor = getComputedStyle(button).color;
      activeButton = button;
      button.dataset.hoverEffectActive = "true";
      if (getComputedStyle(button).position === "static") {
        if (!originalPositions.has(button)) {
          originalPositions.set(button, [button.style.position, button.style.getPropertyPriority("position")]);
        }
        button.style.position = "relative";
      }

      const { layer, fill, labels } = createHoverLayer(button, currentColor, surface, currentLabel);
      const currentLetters = labels.querySelectorAll(".button-hover-current .button-hover-letter");
      const nextLetters = labels.querySelectorAll(".button-hover-next .button-hover-letter");
      gsap.set(currentLetters, { yPercent: 0, opacity: 1 });
      gsap.set(nextLetters, { yPercent: 115, opacity: 0 });

      const currentExitStagger = 0.01;
      const currentExitDuration = 0.28;
      const currentExitAt = 0.03;
      const currentExitEnd = currentExitAt + currentExitDuration + Math.max(0, currentLetters.length - 1) * currentExitStagger;
      const nextEntryAt = currentExitEnd + 0.04;
      const timeline = gsap.timeline({ paused: true });
      timeline
        .to(fill, {
          clipPath: surface === "solid"
            ? "circle(0% at 0% 100%)"
            : "circle(150% at 0% 100%)",
          duration: 0.56,
          ease: "power3.out",
        }, 0)
        .to(currentLetters, {
          yPercent: -115,
          opacity: 0,
          duration: currentExitDuration,
          stagger: currentExitStagger,
          ease: "power3.in",
        }, currentExitAt)
        .set(labels.querySelector(".button-hover-current"), {
          visibility: "hidden",
        }, currentExitEnd)
        .fromTo(nextLetters, {
          yPercent: 115,
          opacity: 0,
        }, {
          yPercent: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.026,
          ease: "power3.out",
        }, nextEntryAt);

      button._buttonHoverLayer = layer;
      button._buttonHoverTimeline = timeline;
      timeline.play(0);
    };

    function leave(button) {
      if (!button || button !== activeButton) return;
      activeButton = null;
      const layer = button._buttonHoverLayer;
      const timeline = button._buttonHoverTimeline;
      if (!layer || !timeline) {
        restorePosition(button);
        return;
      }
      timeline.eventCallback("onReverseComplete", () => {
        layer.remove();
        delete button.dataset.hoverEffectActive;
        delete button._buttonHoverLayer;
        delete button._buttonHoverTimeline;
        restorePosition(button);
      });
      timeline.reverse();
    }

    const findButton = (target) =>
      target instanceof Element ? target.closest(BUTTON_SELECTOR) : null;
    const onPointerOver = (event) => {
      const button = findButton(event.target);
      if (button && !button.contains(event.relatedTarget)) enter(button);
    };
    const onPointerOut = (event) => {
      const button = findButton(event.target);
      if (button && !button.contains(event.relatedTarget)) leave(button);
    };
    const onFocusIn = (event) => enter(findButton(event.target));
    const onFocusOut = (event) => {
      const button = findButton(event.target);
      if (button && !button.contains(event.relatedTarget)) leave(button);
    };

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    scanButtons();
    const observer = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node instanceof Element) scanButtons(node);
      }));
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
      observer.disconnect();
      if (activeButton?._buttonHoverTimeline) {
        activeButton._buttonHoverTimeline.kill();
        activeButton._buttonHoverLayer?.remove();
        delete activeButton._buttonHoverLayer;
        delete activeButton._buttonHoverTimeline;
        delete activeButton.dataset.hoverEffectActive;
        restorePosition(activeButton);
      }
    };
  }, []);

  return null;
}
