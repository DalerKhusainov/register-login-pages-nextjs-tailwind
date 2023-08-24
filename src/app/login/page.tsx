"use client";
import InputNumber from "@/components/InputNumber";
import InputPassword from "@/components/InputPassword";
import SignInFacebookButton from "@/components/buttons/SignInGoogleBtn";
import SignInGoogleButton from "@/components/buttons/SignInFacebook";
import SignInInstagramButton from "@/components/buttons/SignInInstagramBtn";

const LoginPage = () => {
  /////////////////////////////////////////////////
  // for testing
  const handlerInput = (e: string | number | boolean) => {
    console.log(e);
  };
  const oauthSessionResponse = true;
  const signOut = () => console.log("Signed Out");
  const signIn = () => console.log("Signed in");
  /////////////////////////////////////////////////

  return (
    <div className="flex flex-col items-center justify-center p-24">
      <form className="bg-primaryWhite flex flex-col px-10 py-5 w-[400px] drop-shadow-md">
        <h3 className="text-center text-xl tracking-wide mb-7 text-mainBlue font-semibold">
          Вход
        </h3>
        <InputNumber
          value={0}
          label="Номер телефона*"
          name="phoneNumber"
          onChange={handlerInput}
          error=""
        />
        <InputPassword
          value=""
          label="Пароль*"
          name="password"
          onChange={handlerInput}
          error=""
        />
        <button
          type="button"
          className="w-full py-4 mt-2 mb-6 text-lg font-semibold transition-all ease-in rounded-md text-primaryWhite bg-mainBlue hover:bg-hoverBlue"
        >
          Вход
        </button>
        <div className="flex flex-col w-full gap-4">
          <SignInFacebookButton
            sessionExist={!oauthSessionResponse}
            handleClick={oauthSessionResponse ? signOut : signIn}
          />
          <SignInGoogleButton
            sessionExist={!oauthSessionResponse}
            handleClick={oauthSessionResponse ? signOut : signIn}
          />
          <SignInInstagramButton
            sessionExist={!oauthSessionResponse}
            handleClick={oauthSessionResponse ? signOut : signIn}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
