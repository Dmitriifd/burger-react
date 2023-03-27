import style from './Container.module.css';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ className, children }: ContainerProps) => {
  return <div className={classNames(style.container, className)}>{children}</div>;
};

export { Container };
