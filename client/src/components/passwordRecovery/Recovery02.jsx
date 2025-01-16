import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";

export function Recovery02({ setComponent, pinArray, setPinArray }) {

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newPinArray = [...pinArray];
      newPinArray[index] = value;
      setPinArray(newPinArray);

      if (value !== "" && index < pinArray.length - 1) {
        document.getElementById(`pin-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pinArray[index] && index > 0) {
      // Borra y mueve el foco al anterior si el actual está vacío
      document.getElementById(`pin-${index - 1}`).focus();
    }
  };

  const handleAddDigit = (digit) => {
    const firstEmptyIndex = pinArray.findIndex((char) => char === "");
    if (firstEmptyIndex !== -1) {
      handleChange(digit, firstEmptyIndex);
    }
  };

  const handleDelete = () => {
    const lastFilledIndex = pinArray.findLastIndex((char) => char !== "");
    if (lastFilledIndex !== -1) {
      const newPinArray = [...pinArray];
      newPinArray[lastFilledIndex] = ""; 
      setPinArray(newPinArray); 
      document.getElementById(`pin-${lastFilledIndex}`).focus();
    }
  };

  return (
    <form className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-full">
      <header>
        <div className="flex flex-row justify-between">
        <button onClick={() => setComponent("recovery01")}>
            <IoIosArrowBack className="text-title my-2 mx-0 text-primary" />
          </button>
          <button onClick={() => setComponent("recovery03")}>
            <IoIosArrowForward className="text-title my-2 mx-0 text-primary" />
          </button>
        </div>
        <h1 className="text-title mb-4 text-center text-primary">
          Ingresar Código
        </h1>
        <p className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ullamcorper quis mauris ut tristique. Donec euismod dui in risus
          tristique, ac lacinia eros consequat.
        </p>
      </header>
      <section className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-center gap-2">
          {pinArray.map((value, index) => (
            <input
              key={index}
              id={`pin-${index}`}
              className="w-16 h-16 text-center border-2 border-gray-400 rounded-md"
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <p className="text-center my-2 w-full">Enviar de nuevo en 00:00:00</p>
        <button className="w-full border border-slate-300 py-2 rounded-3xl m-2">
          VERIFICAR
        </button>
      </section>
      <div className="w-full h-[1px] bg-slate-400" />
      <section className="grid grid-cols-3 gap-4 w-full justify-items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
          <button
            key={digit}
            type="button"
            className="rounded-lg border-2 text-subtitle w-20 py-2"
            onClick={() => handleAddDigit(String(digit))}
          >
            {digit}
          </button>
        ))}
        <div></div>
        <button
          type="button"
          key="0"
          className="rounded-lg border-2 text-subtitle w-20 py-2 justify-self-center"
          onClick={() => handleAddDigit(String("0"))}
        >
          0
        </button>
        <button onClick={handleDelete}>
          <FaDeleteLeft />
        </button>
      </section>
    </form>
  );
}
