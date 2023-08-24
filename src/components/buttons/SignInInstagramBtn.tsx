"use client";
// material ui icon
import InstagramIcon from "@mui/icons-material/Instagram";

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
      onClick={() => handleClick("instagram")}
      disabled={disabled}
      type="button"
      className="flex items-center justify-center w-full gap-6 py-2 transition-all ease-in rounded-md bg-grayLighter hover:bg-hoverGray"
    >
      <div className="flex items-center justify-center m-0 text-4xl text-mainBlue">
        <InstagramIcon fontSize="inherit" />
      </div>
      <span className="text-lg text-start w-[200px]">{text}</span>
    </button>
  );
};

const SignInInstagramButton = ({
  sessionExist,
  handleClick,
}: {
  sessionExist: boolean;
  handleClick: () => void;
}) => {
  if (sessionExist) {
    return (
      <Button
        text={"Выход из Instagram"}
        handleClick={handleClick}
        disabled={!sessionExist}
      />
    );
  }
  return (
    <Button
      text={"Вход через Instagram"}
      handleClick={handleClick}
      disabled={sessionExist}
    />
  );
};

export default SignInInstagramButton;
