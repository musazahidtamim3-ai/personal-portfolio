'use client'
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import GlobalLoader from './GlobalLoader';

export default function LoadingProvider({ children }) {
     const [isLoading, setIsLoading] = useState(true);

     return (
          <AnimatePresence mode="wait">
               {isLoading ? (
                    <GlobalLoader key="loader" finishLoading={() => setIsLoading(false)} />
               ) : (
                    <div key="content" className="w-full flex flex-col flex-1">
                         {children}
                    </div>
               )}
          </AnimatePresence>
     );
}