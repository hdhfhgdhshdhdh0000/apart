const TransitionWrapper = ({ isTransitioning, children }) => {
  return (
    <div className={`transition-wrapper ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
      {children}
      <style jsx>{`
        .transition-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;          
        }

        .fade-in {
          animation: fadeIn 0.5s forwards;
        }

        .fade-out {
          animation: fadeOut 0.5s forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TransitionWrapper;
