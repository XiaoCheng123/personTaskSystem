// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';

import TaskStatus from './pages/TaskStatus';
import MemberList from './pages/MemberList';
import AddMember from './pages/AddMember';
import ProjectList from './pages/ProjectList';
import EditProject from './pages/EditProject';
import BasicLayout from './layouts/BasicLayout';
import AddProject from './pages/AddProject';

const routerConfig = [
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/member/list',
    component: MemberList,
  },
  {
    path: '/add/member',
    component: AddMember,
  },
  {
    path: '/task/status',
    component: TaskStatus,
  },
  {
    path: '/project/list',
    component: ProjectList,
  },
  {
    path: '/add/project',
    component: AddProject,
  },
  {
    path: '/project/edit',
    layout: BasicLayout,
    component: EditProject,
  },
];

export default routerConfig;
