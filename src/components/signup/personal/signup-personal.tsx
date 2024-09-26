import { ControlSteps } from "@/components/steps/control-steps";
import { useState } from "react";
import { SingUpValidation } from "../signup-validation";
import { SignUpForm } from "./signup-form";

export function SignUpPersonal() {
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [step, setStep] = useState(1)
    return (
        <div className="flex flex-col gap-4 font-medium">
            <span className="text-center text-lg">Create new account</span>
            <ControlSteps steps={2} activeStep={step} />
            {step === 0 && <SignUpForm />}
            {step === 1 && <SingUpValidation />}
        </div>
    )
}