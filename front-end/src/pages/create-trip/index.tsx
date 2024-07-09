import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export function CreateTripPage() {
  const navigate = useNavigate();
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripsModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function handleOpenGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function handleCloseGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function handleOpenGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function handleCloseGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function handleOpenConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function handleCloseConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailToInvite(email: string) {
    setEmailsToInvite(
      emailsToInvite.filter((emailToInvite) => emailToInvite !== email)
    );
  }

  function handleCreateTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/trips/1");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            closeGuestsInput={handleCloseGuestsInput}
            openGuestsInput={handleOpenGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openGuestsModal={handleOpenGuestsModal}
              openConfirmTripModal={handleOpenConfirmTripModal}
            />
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          emailsToInvite={emailsToInvite}
          closeGuestsModal={handleCloseGuestsModal}
          removeEmailToInvite={removeEmailToInvite}
        />
      )}

      {isConfirmTripsModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={handleCloseConfirmTripModal}
          createTrip={handleCreateTrip}
        />
      )}
    </div>
  );
}
