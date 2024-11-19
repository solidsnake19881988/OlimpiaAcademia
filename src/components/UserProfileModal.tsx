import React, { useState, useCallback } from 'react';
import { X, Upload, Mail, Lock, User as UserIcon } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

type View = 'login' | 'register' | 'profile';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<View>('login');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1
  });

  if (!isOpen) return null;

  const renderLogin = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <div className="relative">
          <input
            type="email"
            className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            placeholder="tu@email.com"
          />
          <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Contraseña</label>
        <div className="relative">
          <input
            type="password"
            className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            placeholder="••••••••"
          />
          <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>
      <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition-colors">
        Iniciar Sesión
      </button>
      <p className="text-center text-sm">
        ¿No tienes cuenta?{' '}
        <button
          onClick={() => setView('register')}
          className="text-blue-400 hover:underline"
        >
          Regístrate
        </button>
      </p>
    </div>
  );

  const renderRegister = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Crear Cuenta</h2>
      <div>
        <label className="block text-sm font-medium mb-2">Nombre</label>
        <div className="relative">
          <input
            type="text"
            className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            placeholder="Tu nombre"
          />
          <UserIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <div className="relative">
          <input
            type="email"
            className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            placeholder="tu@email.com"
          />
          <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Contraseña</label>
        <div className="relative">
          <input
            type="password"
            className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            placeholder="••••••••"
          />
          <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Foto de Perfil</label>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed border-gray-700 rounded-lg p-4 text-center cursor-pointer hover:border-gray-500 transition-colors ${
            isDragActive ? 'border-blue-500' : ''
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
          <p className="text-sm text-gray-400">
            {isDragActive
              ? 'Suelta la imagen aquí'
              : 'Arrastra una imagen o haz clic para seleccionar'}
          </p>
        </div>
      </div>
      <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition-colors">
        Crear Cuenta
      </button>
      <p className="text-center text-sm">
        ¿Ya tienes cuenta?{' '}
        <button
          onClick={() => setView('login')}
          className="text-blue-400 hover:underline"
        >
          Inicia Sesión
        </button>
      </p>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Mi Perfil</h2>
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={profileImage || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <button
            {...getRootProps()}
            className="absolute bottom-0 right-0 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <input {...getInputProps()} />
            <Upload className="w-4 h-4" />
          </button>
        </div>
        <h3 className="text-xl font-semibold mt-4">Juan Pérez</h3>
        <p className="text-gray-400">juan@example.com</p>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nombre</label>
          <input
            type="text"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            defaultValue="Juan Pérez"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            defaultValue="juan@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Nueva Contraseña</label>
          <input
            type="password"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
            placeholder="Dejar en blanco para mantener la actual"
          />
        </div>
      </div>
      <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition-colors">
        Guardar Cambios
      </button>
      <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
        Cerrar Sesión
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 w-full max-w-md rounded-xl p-6 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        {view === 'login' && renderLogin()}
        {view === 'register' && renderRegister()}
        {view === 'profile' && renderProfile()}
      </div>
    </div>
  );
};

export default UserProfileModal;