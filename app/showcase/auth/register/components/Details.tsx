"use client"
import * as React from "react"
import { TbLayoutBottombarCollapseFilled } from "react-icons/tb";
import styles from "@/app/showcase/auth/login/components/loginForm.module.css"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function Details() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      // className="w-[550px] space-y-2"
      className={styles.details_container}
    >
      <div className="flex items-center justify-center px-4">
        <h4 className="text-sm font-semibold">
          Details
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="ml-2">
            <TbLayoutBottombarCollapseFilled className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        {/* <div className="rounded-md px-4 py-2 text-sm text-justify"> */}
        <div className={styles.details_text}>
          <div>
            The process of making this credential registration and login system involves several key steps to ensure a smooth and secure user experience.
          </div>
          <div>
            I started by setting up state variables for all the input fields such as name, email, password, and confirm password using the useState hook in React. This allows the form to keep track of user input in real-time.
          </div>
          <div>
            Then, I created a function to handle form submission. This function checks if all fields are filled out and if the passwords match. If any of these conditions are not met, an error message is displayed.
          </div>
          <div>
          Once the validation checks are passed, the form data is sent to the server using a POST request to the api endpoint. This is where the actual registration happens on the backend. If the registration is successful, a success message is shown, otherwise, an error message is displayed.
          </div>
          <div>
            The input fields are updated in real-time using the onChange method, which updates the state variables with the current value of the input fields.
          </div>
          <div>
            Moreover, the form has autocomplete attributes that help the browser provide suggestions based on the user`&apos;s previously entered information, making the form more user-friendly.
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
