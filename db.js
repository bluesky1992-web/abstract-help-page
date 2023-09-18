import account from './images/account.png'
import auth from './images/auth.png'
import billing from './images/billing.png'
import manage from './images/manage.png'
import support from './images/support.png'
import version from './images/version.png'

const services = [
  {
    id: 0,
    title: 'Using Abstract',
    body: 'Abstract lets you manage, version, and document your designs in one place.',
    img: account,
    
  },
  {
    id: 1,
    title: 'Manage your account',
    body: 'Configure your account settings, such as your email, profile details, and password.',
    img:auth
  },
  {
    id: 2,
    title: 'Manage organizations, teams, and projects',
    body: 'Use Abstract organizations, teams, and projects to organize your people and your work.',
    img: billing
  },
  {
    id: 3,
    title: 'Manage billing',
    body: 'Change subscriptions and payment details.',
    img: manage
  },
  {
    id: 4,
    title: 'Authenticate to Abstract',
    body: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
    img: support
  },
  {
    id: 5,
    title: 'Abstract support',
    body: 'Get in touch with a human.',
    img:version
  },
];
console.log(services[0].img);
export default services;
