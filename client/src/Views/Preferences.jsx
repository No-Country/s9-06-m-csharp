import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Checkbox,
  FormLabel,
  FormGroup,
  Box
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system';
import Slider, { sliderClasses } from '@mui/base/Slider';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { BsCheck2 } from 'react-icons/bs';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const items = [
  { id: "deporte", label: "Deporte" },
  { id: "cocina", label: "Cocina" },
  { id: "musica", label: "Música" },
  { id: "idioma", label: "Idioma" },
  { id: "otro", label: "Otro" },
];

function getSteps() {
  return [
    "Nombre",
    "Fecha de nacimiento",
    "Género",
    "Pictures",
    "Preferences",
    "Detail Preferences",
    "Distance Preference"
  ];
}

const Preferences = () => {
  const { methods, register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState({
    name: "",
    date: "",
    genero: "",
    preferences: [],
    detailPreferences: "",
    distancePreference: "50"
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);

  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);


  const steps = getSteps();

  const captureInputs = (e) => {
    if (e.target.name === "preferences") {
      let copy = { ...data }

      if (e.target.checked) {
        copy.preferences.push(e.target.value)
      } else {
        copy.preferences = copy.preferences.filter(el => el !== e.target.value);
      }

      setData(copy);
    } else {
      setData(() => ({
        ...data,
        [e.target.name]: e.target.value
      }));
    }
  }
  // const FormSubmit = () => {
  //   alert("Enviado con exito!!!");
  //   console.log(data);
  // }



  // const handleImageChange = (filesReceived) => {
  //   const [...uploadedFiles] = filesReceived
  //   const filesUploaded = uploadedFiles.map((file) => {
  //     const newFile = {
  //       urlPreview: window.URL.createObjectURL(file),
  //       name: file.name,
  //       file
  //     }

  //     return newFile
  //   })

  //   const allFiles = [...data.images, ...filesUploaded]

  //   if (allFiles.length > 6) return

  //   const filesLimit = [...data.images, ...filesUploaded].splice(0, 6)

  //   setImages(filesLimit)
  // }

  // const handleDeleteImage = (indexImage) => {
  //   const newFiles = data.images.filter((_, index) => index !== indexImage)
  //   setImages(newFiles);
  // }


  // const isStepOptional = (step) => {
  //   return step === 1 || step === 2;
  //   return step === 9;
  // };

  const isStepFalied = () => {
    return Boolean(Object.keys(errors).length);
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    console.log(data);
    console.log("files: ", files);
    console.log("images: ", images);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps([...skippedSteps, activeStep]);
  //   }
  //   setActiveStep(activeStep + 1);
  // };

  async function uploadimg(e) {
    const file = e.target.files[0];
    if (file) {
      console.log("e---image", files, images);

      setImages([...images, (await readFileAsync(file))]);
      setFiles([...files, file]);
    }
  }

  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve({
          id: uuidv4(),
          url: reader.result,
          type: "image"
        });
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }

  // function handleSaveImage() {
  //   console.log(files);
  // }

  function deleteFile(id) {
    const imageIndex = images.findIndex(item => item.id === id);

    if (imageIndex > -1) {
      setImages(images.filter(item => item.id !== id));
      setFiles(files.filter((_, i) => i !== imageIndex));
    }
  }

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#BF9CFA',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#BF9CFA',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#c6c6c6',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#c6c6c6',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#BF9CFA',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#BF9CFA',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <BsCheck2 className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

  return (
    <div className="min-h-screen relative bg-main_color">
      <div className="h-12 px-4 py-2 mb-10 flex justify-start items-center">
        {activeStep !== 0
          ? <MdOutlineArrowBackIos onClick={handleBack} style={{ width: "32px", height: "32px" }} />
          : null
        }
      </div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography
          //       variant="caption"
          //       align="center"
          //       style={{ display: "block" }}
          //     >
          //       optional
          //     </Typography>
          //   );
          // }
          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel StepIconComponent={QontoStepIcon} {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <div className="text-center">
          Tus preferencias se agregaron correctamente
        </div>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleNext)} className="px-4 py-8">
              {
                activeStep == 0 &&
                (<>
                  <h2 className="text-2xl text-black font-bold mb-4">¿Cómo es tu nombre?</h2>
                  <p className="text-sm text-black my-4">Asi es como se va a ver en tu perfil, pero recuerda que no podrás cambiarlo más adelante. ¡Elige sabiamente! 😉</p>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    onChange={captureInputs}
                    value={data.name}
                    className="w-full py-2.5 px-4 border border-solid border-[#c6c6c6] rounded-2xl"
                    placeholder="Ingresa tu nombre"
                  />
                  {errors.name?.type === "required" && <p className="mt-2 p-3 rounded-xl font-bold text-sm bg-red-100 text-error">El nombre es obligatorio</p>}
                </>)
              }
              {
                activeStep == 1 &&
                (<>
                  <h2 className="text-2xl text-black font-bold mb-4">¿Cuándo es tu cumpleaños?</h2>
                  <p className="text-sm text-black my-4">Tus posibles amigos solo verán tu edad, no tu fecha de nacimiento.</p>
                  <div className="flex justify-center">
                    <input
                      {...register("date", { required: true })}
                      type="date"
                      name="date"
                      onChange={captureInputs}
                      value={data.date}
                      className="w-40 px-4 py-2 mx-auto text-base rounded-2xl"
                    />
                  </div>
                  {errors.date?.type === "required" && <p className="mt-2 p-3 rounded-xl font-bold text-sm bg-red-100 text-error">La fecha de nacimiento es obligatoria</p>}
                </>)
              }
              {
                activeStep == 2 &&
                (<>
                  <h2 className="text-2xl mb-4">¿Con que género de indentificas?</h2>
                  <div>
                    <label htmlFor="femenino">
                      <input type="radio" id="femenino" value="femenino" {...register("genero", { required: true })} onChange={captureInputs} />
                      Femenino
                    </label>
                    <label htmlFor="masculino">
                      <div></div>
                      <input type="radio" id="masculino" value="masculino" {...register("genero", { required: true })} onChange={captureInputs} />
                      Masculino
                    </label>
                    <label htmlFor="otro">
                      <input type="radio" id="otro" value="otro" {...register("genero", { required: true })} onChange={captureInputs} />
                      Otro
                    </label>
                  </div>
                  {errors.genero?.type === "required" && <p className="mt-2 p-3 rounded-xl font-bold text-sm bg-red-100 text-error">El género es obligatorio</p>}
                </>)
              }
              {activeStep == 3 &&
                (
                  <>
                    <label
                      htmlFor="button-file"
                    >
                      <input
                        {...register("images", { required: true })}
                        required
                        accept="image/*"
                        name="images"
                        id="button-file"
                        type="file"
                        onChange={uploadimg}
                      />
                      <p> {files.length === 0 && "Debes subir al menos una imagen"} </p>
                      <p>{errors.images?.type === "required" && "Debes subir al menos una imagen"}</p>
                    </label>

                    {images.map((media) => (
                      <div
                        role="button"
                        tabIndex={0}
                        key={media.id}
                      >
                        <div onClick={() => deleteFile(media.id)}>delete</div>
                        <img
                          className="w-40"
                          src={media.url}
                          alt="product"
                        />
                      </div>
                    ))}
                  </>
                )
              }
              {activeStep == 4 &&
                (
                  <>
                    <h2 className="text-2xl mb-4">¿Qué te interesa?</h2>
                    <div>
                      {errors.preferences && <p>{errors.preferences?.message}</p>}
                      <input
                        {...register("preferences", { required: "Debes elegir una categoria" })}
                        onChange={captureInputs}
                        type="checkbox"
                        name="preferences"
                        value="deportes"
                        id="deportes"
                      />
                      <label htmlFor="deportes">deportes</label>
                    </div>
                    <div>
                      <input
                        {...register("preferences", { required: "Debes elegir una categoria" })}
                        onChange={captureInputs}
                        type="checkbox"
                        name="preferences"
                        value="cocina"
                        id="cocina"
                      />
                      <label htmlFor="cocina">cocina</label>
                    </div>
                  </>
                )
              }
              {
                activeStep == 5 &&
                (<>
                  <h2 className="text-2xl text-black font-bold mb-4">Cuéntanos algo breve de tu interes</h2>
                  <textarea {...register("detailPreferences", { required: true })} cols="30" rows="5"
                    onChange={captureInputs}
                    value={data.detailPreferences}
                  >
                  </textarea>
                  <p> {errors.detailPreferences?.type === "required" && "Este campo es obligatorio"}</p>
                </>)
              }
              {
                activeStep == 6 &&
                <>
                  <h2 className="text-2xl mb-4">¿Tus preferencias de distancia?</h2>
                  <p className="mb-4">La aplicación necesita acceder a tu ubicación para encontrar las mejores coincidencias para ti.</p>
                  <div>
                    <input
                      {...register("distancePreference", { required: true })} type="range"
                      id="tempB"
                      name="distancePreference"
                      list="values"
                      onChange={captureInputs}
                      className="w-full m-0"
                      step={10}
                      min={0}
                      max={100}
                      value={data.distancePreference}
                    />
                    <datalist className="flex justify-between w-full" id="values">
                      <option className="p-0" value="0" label="0"></option>
                      <option className="p-0" value="30" label="30km"></option>
                      <option className="p-0" value="50" label="50km"></option>
                      <option className="p-0" value="75"></option>
                      <option className="p-0" value="100" label="100km"></option>
                    </datalist>
                  </div>
                  <p>{data.distancePreference === "50" && "La distancia es obligatoria"}</p>
                </>
              }
              <div className="w-full min-h-full p-4 inline-block">
                {/* {isStepOptional(activeStep) && (
                  <button onClick={handleSkip}
                    className="transition duration-200 bg-accent2 text-black py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block text-base font-bold h-12 w-full"
                    type="submit"
                  >
                    skip
                  </button>
                )} */}
                <button
                  className="cursor-pointer transition duration-200 bg-accent2 text-black py-2.5 rounded-2xl text-sm shadow-sm hover:shadow-md text-center inline-block text-base font-bold absolute left-0 right-0 bottom-10 h-12 mx-4"
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Finalizar" : "Continuar"}
                </button>
              </div>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default Preferences;