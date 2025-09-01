import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors duration-300" aria-label={ariaLabel}>
    {children}
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 FF Battle Arena. All rights reserved.</p>
          <div className="flex space-x-6">
            <SocialIcon href="#" aria-label="Facebook page">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </SocialIcon>
             <SocialIcon href="#" aria-label="Twitter profile">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Discord server">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.483c-1.314-.803-2.733-1.42-4.22-1.832a.56.56 0 0 0-.617.253c-.34.636-.636 1.314-.89 2.034-2.126-.424-4.252-.424-6.335 0-.253-.717-.549-1.398-.89-2.034a.56.56 0 0 0-.616-.253c-1.487.412-2.906 1.029-4.22 1.832a.56.56 0 0 0-.253.523C.56 12.057 3.324 17.51 8.27 19.539a.56.56 0 0 0 .57-.127c.636-.593 1.229-1.23 1.778-1.909a.56.56 0 0 0-.127-.847c-.506-.34-.97-.68-1.398-.97a.56.56 0 0 1-.084-.89c.38-.253.76-.506 1.14-.76a.56.56 0 0 0 .21-.803c-.21-.295-.424-.593-.636-.89a.56.56 0 0 1 .127-.803c1.778 1.058 3.73 1.058 5.508 0a.56.56 0 0 1 .127.803c-.21.296-.424.593-.636.89a.56.56 0 0 0 .21.803c.38.254.76.507 1.14.76a.56.56 0 0 1-.084.89c-.428.29-.89.63-1.398.97a.56.56 0 0 0-.127.847c.549.678 1.14 1.315 1.778 1.909a.56.56 0 0 0 .57.127c4.946-2.029 7.71-7.482 7.837-14.533a.56.56 0 0 0-.254-.523zM9.5 14.5c-.828 0-1.5-.897-1.5-2s.672-2 1.5-2 1.5.897 1.5 2-.672 2-1.5 2zm5 0c-.828 0-1.5-.897-1.5-2s.672-2 1.5-2 1.5.897 1.5 2-.672 2-1.5 2z" /></svg>
            </SocialIcon>
             <SocialIcon href="#" aria-label="YouTube channel">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.25,4,12,4,12,4S5.75,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.75,2,12,2,12s0,4.25,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.75,20,12,20,12,20s6.25,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.25,22,12,22,12S22,7.75,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" /></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};
