import { Step } from "./step";


interface ControlStepsProps {
        steps: number;
        activeStep: number;
}

export function ControlSteps({ steps, activeStep }: ControlStepsProps) {

        return (
                <div className="flex justify-center items-center gap-2">
                        {Array.from({ length: steps }, (_, index) => (
                                <Step key={index + 1} active={index === activeStep} />
                        ))}
                </div>
        )
}