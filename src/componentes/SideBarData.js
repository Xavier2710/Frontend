import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [

  {
    title: 'Dashboard',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Estudiantes',
    path: '/Estudiantes',
    icon: <IoIcons.IoIosSchool />,
    cName: 'nav-text'
  },
  {
    title: 'Dimensiones',
    path: '/Dimensiones',
    icon: <FaIcons.FaPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Preguntas',
    path: '/Preguntas',
    icon: <FaIcons.FaQuestion />,
    cName: 'nav-text'
  },
  {
    title: 'Crear cuestionario',
    path: '/Cuestionario',
    icon: <IoIcons.IoMdCreate />,
    cName: 'nav-text'
  },
  {
    title: 'Creaciones Literarias',
    path: '/CreacionesLiterarias',
    icon: <IoIcons.IoMdBook />,
    cName: 'nav-text'
  },
  {
    title: 'Reportes',
    path: '/Reportes',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];