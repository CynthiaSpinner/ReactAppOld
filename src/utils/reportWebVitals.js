// function that measures and reports web vitals for performance monitoring
const reportWebVitals = onPerfEntry => {
  // checks if callback function is provided and is actually a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // dynamically imports web-vitals library for performance metrics
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // measures cumulative layout shift (visual stability)
      getCLS(onPerfEntry);
      // measures first input delay (interactivity)
      getFID(onPerfEntry);
      // measures first contentful paint (loading performance)
      getFCP(onPerfEntry);
      // measures largest contentful paint (loading performance)
      getLCP(onPerfEntry);
      // measures time to first byte (server response time)
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
