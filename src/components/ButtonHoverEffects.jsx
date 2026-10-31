import { useLayoutEffect } from "react";
import gsap from "gsap";

const BUTTON_SELECTOR =
  'button:not([disabled]):not([data-hover-effect="off"]):not([class*="rdp-"]), [role="button"]:not([aria-disabled="true"]):not([data-hover-effect="off"]):not([class*="rdp-"]), a[href][class*="bg-"]:not([data-hover-effect="off"])';

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

const TRAILING_ARROW_PATTERN = /^(.*?)(?:\s*)(→|->|➜|➝|⟶|⇒|↗|↘|↪|›|»)\s*$/u;
const ARROW_ICON_PATTERN = /(?:arrow|chevron|move-right|external-link)/i;

function makePhrase(label, className, { icon, iconPosition = "end", iconGap = "0px" } = {}) {
  const phrase = document.createElement("span");
  phrase.className = `button-hover-phrase ${className}`;
  phrase.setAttribute("aria-hidden", "true");

  const appendIcon = () => {
    if (!icon) return;
    const wrapper = document.createElement("span");
    wrapper.className = "button-hover-arrow button-hover-letter";
    wrapper.style.setProperty(iconPosition === "start" ? "margin-right" : "margin-left", iconGap);
    const clonedIcon = icon.cloneNode(true);
    clonedIcon.setAttribute("aria-hidden", "true");
    clonedIcon.setAttribute("focusable", "false");
    clonedIcon.className.baseVal = clonedIcon.className.baseVal
      .split(/\s+/)
      .filter((className) => !className.startsWith("group-hover:") && className !== "transition-transform")
      .join(" ");
    wrapper.append(clonedIcon);
    phrase.append(wrapper);
  };

  if (icon && iconPosition === "start") appendIcon();
  [...label].forEach((character) => {
    const letter = document.createElement("span");
    letter.className = "button-hover-letter";
    letter.textContent = character === " " ? "\u00a0" : character;
    phrase.append(letter);
  });
  if (icon && iconPosition === "end") appendIcon();
  return phrase;
}

function getTrailingArrowIcon(button) {
  const lastElement = button.lastElementChild;
  if (!lastElement) return null;
  const icon = lastElement.matches("svg") ? lastElement : lastElement.querySelector("svg");
  if (!icon || !ARROW_ICON_PATTERN.test(icon.getAttribute("class") || "")) return null;
  return icon;
}

function createHoverLayer(button, currentColor, surface, currentLabel, hoverLabel, arrow) {
  const layer = document.createElement("span");
  layer.className = "button-hover-layer";
  layer.setAttribute("aria-hidden", "true");

  const fill = document.createElement("span");
  fill.className = `button-hover-fill button-hover-fill-${surface}`;
  fill.style.clipPath = surface === "solid"
    ? "circle(150% at 0% 100%)"
    : "circle(0% at 0% 100%)";
  layer.append(fill);

  const labels = document.createElement("span");
  labels.className = `button-hover-label button-hover-label-${surface}`;
  const computedGap = getComputedStyle(button).columnGap;
  const iconGap = computedGap === "normal" ? "0.25em" : computedGap;
  const currentPhrase = makePhrase(currentLabel, "button-hover-current", {
    icon: arrow?.icon,
    iconPosition: "end",
    iconGap,
  });
  const labelColor = arrow ? currentColor || "#7652d6" : surface === "solid" ? "#ffffff" : currentColor || "#7652d6";
  currentPhrase.style.setProperty("color", labelColor, "important");
  const nextPhrase = makePhrase(hoverLabel, "button-hover-next", {
    icon: arrow?.icon,
    iconPosition: "start",
    iconGap,
  });
  nextPhrase.style.setProperty(
    "color",
    arrow ? labelColor : surface === "solid" ? "#7652d6" : "#ffffff",
    "important"
  );
  labels.append(currentPhrase);
  labels.append(nextPhrase);
  layer.append(labels);
  button.append(layer);
  return { layer, fill, labels, currentPhrase, nextPhrase };
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

    const clearHoverState = (button) => {
      if (!button) return;
      if (button._buttonHoverTimeline) {
        button._buttonHoverTimeline.kill();
        delete button._buttonHoverTimeline;
      }
      button._buttonHoverLayer?.remove();
      delete button._buttonHoverLayer;
      delete button.dataset.hoverEffectActive;
      button.style.removeProperty("color");
      button.style.removeProperty("-webkit-text-fill-color");
      button.style.removeProperty("text-shadow");
      restorePosition(button);
    };

    const enter = (button) => {
      if (!button || button === activeButton || !button.matches(BUTTON_SELECTOR)) return;
      if (button.hasAttribute("disabled") || button.getAttribute("aria-disabled") === "true") return;
      if (activeButton) leave(activeButton);
      clearHoverState(button);

      const currentLabel = (button.innerText || button.getAttribute("aria-label") || button.title || "")
        .replace(/\s+/g, " ")
        .trim();
      if (!currentLabel) return;

      const textArrow = currentLabel.match(TRAILING_ARROW_PATTERN);
      const trailingArrowIcon = textArrow ? null : getTrailingArrowIcon(button);
      const arrow = textArrow
        ? { kind: "text", symbol: textArrow[2] }
        : trailingArrowIcon
          ? { kind: "icon", icon: trailingArrowIcon }
          : null;
      const arrowText = textArrow ? textArrow[1].trimEnd() : currentLabel;
      const hoverArrowLabel = arrow
        ? `${arrow.kind === "text" ? `${arrow.symbol} ` : ""}${arrowText}`
        : null;
      const hoverLabel = hoverArrowLabel || button.dataset.hoverText || button.getAttribute("data-hover-label") || "Click ME";
      const surface = classifyButton(button);
      const currentColor = getComputedStyle(button).color;
      activeButton = button;
      button.dataset.hoverEffectActive = "true";

      // Completely hide original text nodes and content during hover
      button.style.setProperty("color", "transparent", "important");
      button.style.setProperty("-webkit-text-fill-color", "transparent", "important");
      button.style.setProperty("text-shadow", "none", "important");

      if (getComputedStyle(button).position === "static") {
        if (!originalPositions.has(button)) {
          originalPositions.set(button, [button.style.position, button.style.getPropertyPriority("position")]);
        }
        button.style.position = "relative";
      }

      const { layer, fill, labels, currentPhrase, nextPhrase } = createHoverLayer(
        button,
        currentColor,
        surface,
        currentLabel,
        hoverLabel,
        arrow ? { ...(arrow.kind === "icon" ? { icon: arrow.icon } : {}) } : null
      );
      if (arrow) labels.classList.add("button-hover-label-preserve-style");
      const currentLetters = labels.querySelectorAll(".button-hover-current .button-hover-letter");
      const nextLetters = labels.querySelectorAll(".button-hover-next .button-hover-letter");

      gsap.set(currentPhrase, { visibility: "visible" });
      gsap.set(nextPhrase, { visibility: "hidden" });
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
          clipPath: "circle(150% at 0% 100%)",
          duration: 0.52,
          ease: "power3.out",
        }, 0)
        .to(currentLetters, {
          yPercent: -115,
          opacity: 0,
          duration: currentExitDuration,
          stagger: currentExitStagger,
          ease: "power3.in",
        }, currentExitAt)
        .set(currentPhrase, {
          visibility: "hidden",
        }, currentExitEnd)
        .set(nextPhrase, {
          visibility: "visible",
        }, nextEntryAt)
        .fromTo(nextLetters, {
          yPercent: 115,
          opacity: 0,
        }, {
          yPercent: 0,
          opacity: 1,
          duration: 0.38,
          stagger: 0.024,
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
        clearHoverState(button);
        return;
      }
      timeline.eventCallback("onReverseComplete", () => {
        clearHoverState(button);
      });
      timeline.reverse();
    }

    const findButton = (target) => {
      if (!(target instanceof Element)) return null;
      const button = target.closest(BUTTON_SELECTOR);
      if (!button) return null;
      if (button.closest('[role="dialog"], [role="grid"], [data-slot="popover-content"], .rdp')) return null;
      return button;
    };

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
      document.querySelectorAll("[data-hover-effect-active]").forEach(clearHoverState);
      if (activeButton) clearHoverState(activeButton);
    };
  }, []);

  return null;
}
