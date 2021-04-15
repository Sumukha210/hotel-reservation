interface IExtra {
  handleAuthForm: Function;
  isLogin: Boolean;
}

const Extra: React.FC<IExtra> = ({ handleAuthForm, isLogin }) => {
  return (
    <>
      <div className="authForm_extra mt-3 text-center text-capitalize">
        {isLogin ? (
          <div>
            new user?
            <span onClick={() => handleAuthForm()}>click here to register</span>
          </div>
        ) : (
          <div>
            already have an account?
            <span onClick={() => handleAuthForm()}>click here to login</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Extra;
