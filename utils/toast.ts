import { toast } from "react-toastify";

export default function removeOffer(id: string, router: any) {
  toast.info("The offer is being removed.", {
    position: "top-center",
  });

  fetch(`api/removeOffer/${id}`, {
    method: "DELETE",
  }).then(() => {
    toast.dismiss();
    
    toast.success("The offer has been removed.", {
      position: "top-center",
    });

    setTimeout(() => {
      router.push("/");
    }, 3000);
  })
}