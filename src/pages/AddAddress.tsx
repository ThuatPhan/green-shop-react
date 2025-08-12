import { assets } from "@/assets/assets";
import { useForm } from "react-hook-form";
import useAddUserAddress from "@/hooks/useAddUserAddress";
import { UserAddressCreation } from "@/models/UserAddress";
import AddressInputField from "@/components/AddressInputField";

const AddAddress = () => {
  const { isPending, mutateAsync: addUserAddress } = useAddUserAddress();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAddressCreation>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      phone: "",
    },
  });

  const onSubmit = async (payload: UserAddressCreation) =>
    await addUserAddress(payload);

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-semibold text-primary">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 mt-6 text-sm"
          >
            <div className="grid grid-cols-2 gap-4">
              <AddressInputField
                placeholder="First name"
                type="text"
                register={register("firstName", {
                  required: "First name is required",
                })}
                error={errors.firstName?.message}
              />
              <AddressInputField
                placeholder="Last name"
                type="text"
                register={register("lastName", {
                  required: "Last name is required",
                })}
                error={errors.lastName?.message}
              />
            </div>
            <AddressInputField
              placeholder="Email address"
              type="email"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              error={errors.email?.message}
            />
            <AddressInputField
              placeholder="Street"
              type="text"
              register={register("street", {
                required: "Street is required",
              })}
              error={errors.street?.message}
            />
            <div className="grid grid-cols-2 gap-4">
              <AddressInputField
                placeholder="City"
                type="text"
                register={register("city", {
                  required: "City is required",
                })}
                error={errors.city?.message}
              />
              <AddressInputField
                placeholder="State"
                type="text"
                register={register("state", {
                  required: "State is required",
                })}
                error={errors.state?.message}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <AddressInputField
                placeholder="Zip code"
                type="number"
                register={register("zipcode", {
                  required: "Zip code is required",
                })}
                error={errors.zipcode?.message}
              />
              <AddressInputField
                placeholder="Country"
                type="text"
                register={register("country", {
                  required: "Country is required",
                })}
                error={errors.country?.message}
              />
            </div>
            <AddressInputField
              placeholder="Phone number"
              type="tel"
              register={register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?\d{10,15}$/,
                  message: "Invalid phone number format",
                },
              })}
              error={errors.phone?.message}
            />
            <button
              type="submit"
              disabled={isPending}
              className={`w-full mt-6 py-3 transition cursor-pointer
                ${
                  isPending
                    ? "bg-gray-400 cursor-not-allowed text-gray-700"
                    : "bg-primary cursor-pointer text-white hover:bg-primary-dull"
                }`}
            >
              {isPending ? "Saving Address ..." : "Save Address"}
            </button>
          </form>
        </div>
        <img
          className="md:mr-16 mb-16 md:mb-0 md:mt-0"
          src={assets.add_address_iamge}
          alt="Add Address"
        />
      </div>
    </div>
  );
};

export default AddAddress;
