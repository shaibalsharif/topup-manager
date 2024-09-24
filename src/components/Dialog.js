import React, { createContext, useContext, useState } from 'react';

const DialogContext = createContext();

export const useDialog = () => {
  return useContext(DialogContext);
};

export const DialogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <DialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

const Dialog = ({ children }) => {
  const { isOpen, closeDialog } = useDialog();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        <button className="absolute top-2 right-2" onClick={closeDialog}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
