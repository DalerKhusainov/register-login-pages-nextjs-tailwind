export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <form className="bg-white flex flex-col px-10 py-5 w-[400px] drop-shadow-md">
        <h3 className="text-center text-xl tracking-wider mb-7 text-blue-500 font-semibold">
          Регистрация
        </h3>
        {/* first name */}
        <div className="flex flex-col relative">
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Имя"
            className="peer h-10 p-2 mb-6 rounded-md border-2 border-gray-300 w-full text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400"
          />
          <label
            htmlFor="firstName"
            className="absolute left-4 bg-white px-1 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Имя
          </label>
        </div>
        {/* last name */}
        <div className="flex flex-col relative">
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Фамилия"
            className="peer h-10 p-2 mb-6 rounded-md border-2 border-gray-300 w-full text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400"
          />
          <label
            htmlFor="lastName"
            className="absolute left-4 bg-white px-1 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Фамилия
          </label>
        </div>
        {/* family name */}
        <div className="flex flex-col relative">
          <input
            id="familyName"
            name="familyName"
            type="text"
            placeholder="Отчество"
            className="peer h-10 p-2 mb-6 rounded-md border-2 border-gray-300 w-full text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400"
          />
          <label
            htmlFor="familyName"
            className="absolute left-4 bg-white px-1 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Отчество
          </label>
        </div>
        {/* birth date picker */}
        <div className="flex flex-col relative">
          <input
            id="birthDatePicker"
            name="birthDatePicker"
            type="date"
            placeholder="Дата рождение"
            className="peer h-10 p-3 mb-6 rounded-md border-2 border-gray-300 w-full text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400"
          />
          <label
            htmlFor="birthDatePicker"
            className="absolute left-4 bg-white px-1 top-2 text-gray-400 text-md transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Дата рождение
          </label>
        </div>
        {/* phone number */}
        <div className="flex flex-col relative">
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Номер телефона"
            className="peer h-10 p-2 mb-6 rounded-md border-2 border-gray-300 w-full text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400"
          />
          <label
            htmlFor="phone"
            className="absolute left-4 bg-white px-1 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Номер телефона
          </label>
        </div>
        {/* select gender */}
        <div className="flex items-center justify-between mb-6 px-2">
          <label>Пол</label>
          <div className="flex justify-between items-center gap-6">
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>
        {/* city */}
        <div className="flex flex-col relative">
          <input
            id="city"
            name="city"
            type="text"
            placeholder="Город"
            className="peer h-10 p-2 mb-6 rounded-md border-2 border-gray-300 w-full text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400"
          />
          <label
            htmlFor="city"
            className="absolute left-4 bg-white px-1 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Город
          </label>
        </div>
        {/* password */}
        <div className="flex flex-col relative">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            className="peer h-10 mb-6 p-4 w-full border-2 border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400 rounded-md"
          />
          <label
            htmlFor="password"
            className="absolute left-4 bg-white px-1 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Пароль
          </label>
        </div>
        {/* confirm password */}
        <div className="flex flex-col relative mb-6">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Повторить пароль"
            className="peer h-10 p-4 w-full border-2 border-gray-300 text-gray-500 placeholder-transparent focus:outline-none focus:border-blue-400 rounded-md"
          />
          <label
            htmlFor="confirmPassword"
            className="absolute left-4 bg-white px-1 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Повторить пароль
          </label>
        </div>
        {/* button */}
        <button className="bg-blue-400 py-2 rounded-lg text-white">
          Зарегистрироваться
        </button>
      </form>
    </main>
  );
}
