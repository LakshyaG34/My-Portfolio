import { useNavigate } from "react-router-dom";
import { ShieldX, Home, ArrowLeft, Lock, Key, UserX } from "lucide-react";
import { useEffect, useState } from "react";

const Unauthorized = () => {
  const navigate = useNavigate();
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 dark:bg-yellow-900/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-orange-200 dark:bg-orange-900/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-lg w-full">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-red-200 dark:border-red-800 transform transition-all duration-500 animate-slideUp">
          
          {/* Header with Lock Icon */}
          <div className="relative bg-gradient-to-r from-red-600 to-red-700 px-6 py-10 text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
            <div className="relative">
              <div className="inline-flex p-4 bg-white/10 rounded-full mb-4 animate-bounce">
                <Lock className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">403</h1>
              <p className="text-red-100 text-lg">Authentication Required</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="text-center">
              <UserX className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-3" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Access Restricted
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                You've attempted to access a page that requires higher privileges{dots}
              </p>
            </div>

            {/* Permission Level Indicator */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
              <div className="flex items-start gap-3">
                <Key className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">
                    Insufficient Permissions
                  </p>
                  <p className="text-xs text-red-600 dark:text-red-300">
                    Your current role doesn't have access to this resource. Please contact your system administrator.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium shadow-md"
              >
                <Home className="w-4 h-4" />
                Home
              </button>
            </div>

            {/* Help Text */}
            <div className="text-center pt-2">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Error Code: 403_UNAUTHORIZED_ACCESS
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Unauthorized;