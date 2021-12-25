import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md' ;


export const SidebarData = [
  { 
    title: 'Trang chủ',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Tìm kiếm',
    path: '/searchpeople',
    icon: <AiIcons.AiOutlineSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Quản lý người dùng',
    path: '/usermanager',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Tài khoản người dùng',
    path: '/infor',
    icon: <MdIcons.MdAccountCircle />,
    cName: 'nav-text'
  }
];