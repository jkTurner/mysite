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
        <div className={styles.details_text}>
          <div>
            The creation of this login form showcases my skills in building secure and user-friendly authentication systems using React, Next.js, NextAuth, and Prisma Client.
          </div>
          <div>
            To start, I set up state variables for the email and password input fields using the useState hook. This allows the form to keep track of user input in real-time.
          </div>
          <div>
            The form submission is handled by the handleSubmit function. When the user submits the form, this function prevents the default form submission behavior and sets a loading state.
          </div>
          <div>
            I used the signIn method from next-auth/react to handle authentication. If the provided credentials are invalid, an error message is displayed. On successful login, the user is redirected to the dashboard.
          </div>
          <div>
            The input fields are updated in real-time using the onChange method, which updates the state variables with the current values entered by the user. This ensures the form is responsive and user-friendly.
          </div>
          <div>
            The backend authentication logic is managed using NextAuth with a credentials provider. This involves connecting to a MongoDB database, verifying user credentials, and securely handling passwords using bcrypt for hashing.
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
