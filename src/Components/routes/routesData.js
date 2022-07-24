export const adminRoutes = [
  { path: '/admin/projects', name: 'Projects' },
  { path: '/admin/timesheets', name: 'Timesheets' },
  { path: '/admin/profile', name: 'Personal information' }
];

export const employeeRoutes = [
  { path: '/employee/projects', name: 'Projects' },
  { path: '/employee/mytimesheets', name: 'My Timesheets' },
  { path: '/employee/teamtimesheets', name: 'Team Timesheets' },
  { path: '/employee/profile', name: 'Personal information' }
];

export const superAdminRoutes = [{ path: '/super-admins', name: 'Admins' }];

export const pmRoutes = [
  { path: '/employee/PM/projects', name: 'Projects' },
  { path: '/employee/PM/mytimesheets', name: 'My Timesheets' },
  { path: '/employee/PM/teamtimesheets', name: 'Team Timesheets' },
  { path: '/employee/PM/profile', name: 'Personal information' }
];
