import P from 'prop-types';
function Container({ children }) {
  return (
    <div className="flex w-full min-h-screen bg-slate-400">{children}</div>
  );
}

Container.propTypes = {
  children: P.node,
};
export default Container;
