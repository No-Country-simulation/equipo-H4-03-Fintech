/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useActionState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SignUp } from "../../actions/auth";
import { setUser } from '../../redux/slices/userSlices'
import FormInput from "../ui/FormInput";
import FormPassword from "../ui/FormPassword";
import Modal from "../ui/Modal";
import ModalText from "../ui/ModalText";

export default function Register({ set }) {

  const [state, action] = useActionState(SignUp, undefined)
  const formInitialState = {
    name: "",
    email: "",
    password: "",
    terms: false,
    policy: false
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
    console.log('terms');
    console.log(typeof formData.terms);

    console.log('policy');
    console.log(typeof formData.policy);

    if (!state) return
    if (Array.isArray(state)) {
      if (state[0]) {
        console.error('Error:', state[0]);
        return;
      } else {
        dispatch(setUser(state[1]));
        navigate(`/onboarding/`);
      }
    }
  }, [state])

  const [formData, setFormData] = useState(formInitialState);

  function handleChange({ target: { name, value } }) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleTermsPolicy({ target: { name, checked } }) {
    setFormData((prev) => ({
      ...prev,
      [name]: Boolean(checked),
    }));
  }

  const modalsInitialState = { policy: false, terms: false }
  const [isOpenModal, setIsOpenModals] = useState(modalsInitialState)
  const onClose = () => setIsOpenModals(modalsInitialState)

  return (
    <form action={action} className="flex flex-col items-center gap-4 m-4">
      {/* 
      //#region NAME
      */}
      <FormInput
        label={"Nombre completo"}
        name={"name"}
        value={formData.name}
        handler={handleChange}
        error={state?.name}
      />
      {/* 
      //#endregion
      //#region EMAIL
      */}
      <FormInput
        label={"Email"}
        name={"email"}
        value={formData.email}
        handler={handleChange}
        error={state?.email}
      />
      {/* 
      //#endregion
      //#region PASSWORD
      */}
      <FormPassword
        value={formData.password}
        handler={handleChange}
        errors={state?.password}
      />
      {/* 
      //#endregion
      */}
      <section className="w-full flex flex-col items-center md:justify-between gap-3">
        <div className="flex flex-col gap-1">
          <article className="flex gap-1 self-start items-baseline">
            <input
              value={formData.terms}
              type="checkbox"
              name="terms"
              id="terms"
              onChange={handleTermsPolicy}
              checked={formData.terms}
            />
            <label htmlFor="terms">Acepto los</label>
            <button
              className="hover:underline self-end text-slate-400"
              onClick={() => {
                setIsOpenModals({
                  ...modalsInitialState,
                  terms: true
                })
              }}
            >
              términos y condiciones
            </button>
            <Modal
              title={"Términos y condiciones"}
              onClose={onClose}
              isOpen={isOpenModal.terms}
            >
              <ModalText />
            </Modal>
          </article>
          {state?.terms && (
            <span className="text-destructive text-sm">
              {state?.terms}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <article className="flex gap-1 self-start items-baseline">
            <input
              value={formData.policy}
              type="checkbox"
              name="policy"
              id="policy"
              onChange={handleTermsPolicy}
              checked={formData.policy}
            />
            <label htmlFor="policy">He leído las</label>
            <button
              onClick={() => {
                setIsOpenModals({
                  ...modalsInitialState,
                  policy: true
                })
              }}
              className="hover:underline self-end text-slate-400"
            >
              políticas de privacidad.
            </button>
            <Modal
              title={"Políticas de privacidad"}
              onClose={onClose}
              isOpen={isOpenModal.policy}
            >
              <ModalText />
            </Modal>
          </article>
          {state?.policy && (
            <span className="text-destructive text-sm">
              {state?.policy}
            </span>
          )}
        </div>
      </section>
      {/*
      //#region SUBMIT
      */}
      <button
        type="submit"
        className="w-full border border-slate-300 py-2 rounded-3xl"
      >
        Crear cuenta
      </button>
      {/* 
      //#endregion
      */}
      <section>
        <span>¿Ya tienes cuenta?</span>
        <button className="hover:underline" onClick={() => set('login')}>ingresar</button>
      </section>
    </form>
  )
}
