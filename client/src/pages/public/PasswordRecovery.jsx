import { useState } from "react";
import {
  Recovery01,
  Recovery02,
  Recovery03,
  Recovery04,
} from "../../components/passwordRecovery/index";

export default function PasswordRecovery() {
  const [recovery, setRecovery] = useState("recovery01");
  const [pinArray, setPinArray] = useState(["", "", "", "", ""]);
  return (
    <main className="w-dvw h-dvh flex flex-col items-center justify-center p-0 m-0 bg-gray-50 px-4">
      {recovery === "recovery01" && <Recovery01 setComponent={setRecovery} />}
      {recovery === "recovery02" && <Recovery02 setComponent={setRecovery} pinArray={pinArray} setPinArray={setPinArray} />}
      {recovery === "recovery03" && <Recovery03 setComponent={setRecovery} />}
      {recovery === "recovery04" && <Recovery04 setComponent={setRecovery} />}
    </main>
  );
}
