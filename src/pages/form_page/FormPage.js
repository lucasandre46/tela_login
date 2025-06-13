import FormCard from '../../components/container/FormsCard/FormsCard';
import { useFormCard } from './../../hooks/useFormCard';



function FormPage() {

    const {
        formData,
        handleChange,
        handleSubmit,
    } = useFormCard();

    return <>
        <FormCard
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    </>





}

export default FormPage;