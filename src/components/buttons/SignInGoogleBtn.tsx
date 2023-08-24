"use client";
// material ui icon
import FacebookIcon from "@mui/icons-material/Facebook";

const Button = ({
  disabled,
  handleClick,
  text,
}: {
  disabled: boolean;
  handleClick: () => void;
  text: string;
}) => {
  return (
    <button
      onClick={() => handleClick("facebook")}
      disabled={disabled}
      type="button"
      className="flex items-center justify-center w-full gap-6 py-2 transition-all ease-in rounded-md bg-grayLighter hover:bg-hoverGray"
    >
      <div className="flex items-center justify-center m-0 text-4xl text-mainBlue">
        <FacebookIcon fontSize="inherit" />
      </div>
      <span className="text-lg text-start w-[200px]">{text}</span>
    </button>
  );
};

const SignInFacebookButton = ({
  sessionExist,
  handleClick,
}: {
  sessionExist: boolean;
  handleClick: () => void;
}) => {
  if (sessionExist) {
    return (
      <Button
        text={"Выход из Facebook"}
        handleClick={handleClick}
        disabled={!sessionExist}
      />
    );
  }
  return (
    <Button
      text={"Вход через Facebook"}
      handleClick={handleClick}
      disabled={sessionExist}
    />
  );
};

export default SignInFacebookButton;
