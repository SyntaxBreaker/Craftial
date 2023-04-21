import { toast } from "react-toastify";

export default function removeOffer(id: string, router: any) {
  console.log(router);

  toast.info("The offer is being removed.", {
    position: "top-center",
  });
  fetch(`api/removeOffer/${id}`, {
    method: "DELETE",
  });
  toast.success("The offer has been removed.", {
    position: "top-center",
  });
  setTimeout(() => {
    router.push("/");
  }, 3000);
}