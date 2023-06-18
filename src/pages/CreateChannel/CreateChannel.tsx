import { IonContent, IonInput, IonButton } from "@ionic/react";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import { Channel } from "../../api";
import { BasicHeader } from "../../components";
import { initialValues, validationSchema } from "./CreateChannel.form";
import "./CreateChannel.scss";

const channelController = new Channel();

export function CreateChannel() {
  const { goBack } = useHistory();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      try {
        channelController.create(formValue.name);
        goBack();
      } catch (error) {
        console.error(error);
        
      }
    },
});

  return (
    <>
      <BasicHeader title="Crear canal" back/>

      <IonContent className="create-channel-page ion-padding">
          <h2>Crear un nuevo canal</h2>

          <IonInput 
            placeholder="Nombre del canal" 
            onIonChange={(e) => formik.setFieldValue("name", e.detail.value)}
          />
          {formik.errors.name && (
            <span className="error">{formik.errors.name}</span>
        )}

          <IonButton expand="block" onClick={() => formik.handleSubmit()}>Crear canal</IonButton>
      </IonContent>
    </>
  );
}
