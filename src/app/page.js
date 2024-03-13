import Basic from "./components/FormFormik";
import FormReact from "./components/FormReact";

export default function Home() {
  const initialValues = { firstName: "", lastName: "", email: "" };
  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col m-6 p-2 border">
        <p className="font-bold text-center m-2">React Form</p>
        <FormReact initialValues={initialValues} />
      </div>
      <div className="flex flex-col m-6 p-2 border">
        <p className="font-bold text-center m-2">Formik Form</p>
        <Basic initialValues={initialValues} />
      </div>
    </div>
  );
}
