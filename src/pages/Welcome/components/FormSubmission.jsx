import { useState } from "react";
import { useNavigate } from "react-router";
import { SEARCH } from "../../../routes/constants";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button";
import { inputValidationRules } from "../../../utils/validation/inputValidation";
import { useAuth } from "../../../context/useAuth";
const FormSubmission = () => {
  const [name, setName] = useState("");
  const { updateUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser((draft) => {
      draft.name = name;
    });
    navigate(SEARCH);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter name"
        name="name"
        label="Name"
        value={name}
        onChange={setName}
        validation={inputValidationRules.name}
      />
      <Button type="submit" label="Submit" />
    </form>
  );
};
export default FormSubmission;
