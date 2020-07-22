/** @jsx jsx */
import { jsx } from 'theme-ui';
import { theme, useConfig, useMenus } from 'docz';
import 'tailwindcss/dist/base.min.css';
import 'tailwindcss/dist/components.min.css';
import 'tailwindcss/dist/utilities.min.css';

import defaultTheme from '~theme';

const Header = ({ title }) => {
  return <div className="border mb-2">{title}</div>;
};

const Menu = ({ menus = [] }) => {
  return (
    <ul>
      {menus.map(m => {
        return (
          <li>
            <a href={m.route}>{m.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

const Theme = ({ children }) => {
  const config = useConfig();
  const menus = useMenus();
  return (
    <div>
      <Header title={config.title} />
      <div>
        <Menu menus={menus} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default theme(defaultTheme)(Theme);
