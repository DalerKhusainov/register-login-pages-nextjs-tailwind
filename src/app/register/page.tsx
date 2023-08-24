"use client";
import InputText from "@/components/InputText";
import DatePicker from "@/components/DatePicker";
import InputNumber from "@/components/InputNumber";
import InputPassword from "@/components/InputPassword";
import SelectInput from "@/components/SelectInput";

const RegisterPage = () => {
  /////////////////////////////////////////////////
  // for testing
  const handlerInput = (e: string | number | boolean) => {
    console.log(e);
  };

  const handlerRadioInput = (value: boolean) => {
    console.log(value);
  };
  /////////////////////////////////////////////////

  return (
    <div className="flex flex-col items-center justify-center p-24">
      <form className="bg-primaryWhite flex flex-col px-10 py-5 w-[400px] drop-shadow-md">
        <h3 className="text-center text-xl tracking-wide mb-7 text-mainBlue font-semibold">
          Регистрация
        </h3>
        <InputText
          value=""
          label="Имя*"
          name="firstName"
          onChange={handlerInput}
          error=""
        />
        <InputText
          value=""
          label="Фамилия*"
          name="secondName"
          onChange={handlerInput}
          error=""
        />
        <InputText
          value=""
          label="Отчество"
          name="middleName"
          onChange={handlerInput}
          error=""
        />
        <DatePicker
          value=""
          label="Дата рождение*"
          name="dateOfBirth"
          onChange={handlerInput}
          error=""
        />
        <InputNumber
          value={0}
          label="Номер телефона*"
          name="phoneNumber"
          onChange={handlerInput}
          error=""
        />
        <SelectInput
          value=""
          label="Город*"
          name="selectCity"
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
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
