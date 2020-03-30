export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
  {
    id: 'quizzes',
    icon: 'iconsminds-dashboard',
    label: 'menu.quizzes',
    to: '/app/product/image-list',
  },
  {
    id: 'security',
    icon: 'iconsminds-security-block',
    label: 'menu.security',
    to: '/app/second-menu/second',
  }
];
export default data;
