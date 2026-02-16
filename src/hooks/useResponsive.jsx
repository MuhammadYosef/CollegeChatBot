// src/hooks/useResponsive.jsx
import { useState, useEffect } from 'react';

/**
 * useResponsive - Custom React hook for responsive design detection
 * 
 * Features:
 * - Tracks window size changes in real-time
 * - Provides boolean flags for different device types
 * - Optimized with cleanup to prevent memory leaks
 * - Mobile-first approach following Tailwind CSS breakpoints
 * 
 * Breakpoints (following Tailwind CSS standards):
 * - Mobile: < 640px
 * - Tablet: >= 640px and < 1024px  
 * - Desktop: >= 1024px and < 1440px
 * - Large Desktop: >= 1440px
 * 
 * @returns {Object} Object containing responsive state information
 * @returns {number} returns.width - Current window width
 * @returns {number} returns.height - Current window height  
 * @returns {boolean} returns.isMobile - True if mobile device
 * @returns {boolean} returns.isTablet - True if tablet device
 * @returns {boolean} returns.isDesktop - True if desktop device
 * @returns {boolean} returns.isLargeDesktop - True if large desktop
 */
const useResponsive = () => {
  // State to track screen dimensions and device type flags
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false
  });
  
  useEffect(() => {
    /**
     * Update screen size and device type flags based on current window dimensions
     */
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        width,
        height,
        isMobile: width < 640,                    // Mobile: < 640px
        isTablet: width >= 640 && width < 1024,  // Tablet: 640px - 1023px
        isDesktop: width >= 1024 && width < 1440, // Desktop: 1024px - 1439px
        isLargeDesktop: width >= 1440             // Large Desktop: >= 1440px
      });
    };
    
    // Set initial values
    updateScreenSize();
    
    // Debounced resize handler for performance optimization
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      // Delay execution to avoid excessive updates during rapid resizing
      timeoutId = setTimeout(updateScreenSize, 150);
    };
    
    // Add event listener for window resize
    window.addEventListener('resize', debouncedResize);
    
    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);
  
  return screenSize;
};

export default useResponsive;