import React from 'react';

export const RestaurantDiscovery: React.FC = () => {
  return (
    <section className="bg-[#121110] py-24 border-t border-dar-brass/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="font-dar-display text-3xl sm:text-4xl text-dar-ivory mb-6">
          Find us when you're looking for dinner.
        </h2>
        
        <p className="font-dar-body text-base text-dar-stone max-w-xl mx-auto mb-10">
          We believe the best dining experiences start with a simple search. Easily locate DAR on Google Maps for precise directions to our Jabal Amman location.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-dar-midnight border border-dar-brass/20 px-6 py-3 rounded-sm transition-colors hover:border-dar-brass/60"
          >
            <svg className="h-5 w-5 text-dar-brass group-hover:text-dar-ivory transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.0004 0C5.3724 0 0 5.3724 0 12.0004C0 18.6276 5.3724 24 12.0004 24C18.6276 24 24 18.6276 24 12.0004C24 5.3724 18.6276 0 12.0004 0ZM12.3852 10.1544L17.514 4.5432C19.0668 5.8956 20.1036 7.7808 20.4072 9.9408H12.3852V10.1544ZM11.6028 10.1544H3.606C3.9168 7.9716 4.9668 6.0696 6.5364 4.7112L11.6028 10.1544ZM11.6028 10.9632L6.1056 16.8648C4.5576 15.6564 3.5184 13.7916 3.2388 11.6664H11.6028V10.9632ZM12.0004 17.5104L16.2972 12.894H12.0004V17.5104ZM12.3852 10.9632V11.6664H20.7612C20.4816 13.7916 19.4424 15.6564 17.8944 16.8648L12.3852 10.9632Z" />
            </svg>
            <span className="font-dar-body text-sm tracking-wide text-dar-ivory">View on Google</span>
          </a>
          
          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 font-dar-body text-sm tracking-wide text-dar-stone hover:text-dar-ivory transition-colors"
          >
            Get Directions &rarr;
          </a>
        </div>
        
      </div>
    </section>
  );
};
