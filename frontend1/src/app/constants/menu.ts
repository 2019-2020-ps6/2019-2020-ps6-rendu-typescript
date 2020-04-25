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
    to: '/app/pages/components/quiz-list',
  },
  {
    id: 'patients',
    icon: 'iconsminds-user',
    label: 'menu.users',
    to: '/app/pages/components/user'
  }
];
export default data;
