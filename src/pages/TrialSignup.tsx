import { RedFooter } from "@/components/RedFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

/* ------------------ Validation ------------------ */
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  countryCode: z.string().min(1, "Select country code"),
  mobile: z
    .string()
    .length(10, "Mobile number must be 10 digits")
    .regex(/^[0-9]+$/, "Digits only"),
  email: z.string().email("Enter a valid email"),
});

/* ------------------ Country Codes ------------------ */
const countryCodes = [
  { code: "+91", label: "🇮🇳 India" },
  { code: "+1", label: "🇺🇸 USA / Canada" },
  { code: "+44", label: "🇬🇧 United Kingdom" },
  { code: "+61", label: "🇦🇺 Australia" },
  { code: "+971", label: "🇦🇪 UAE" },
  { code: "+65", label: "🇸🇬 Singapore" },
];

const TrialSignup = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      countryCode: "",
      mobile: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Trial Requested 🚀",
      description: "Our team will reach out shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background red glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(221,20,20,0.25),transparent_65%)]" />

      <section className="relative min-h-screen flex items-center justify-center px-4">
        <Card
          className="
            relative
            w-full max-w-4xl
            p-10 md:p-14
            bg-black/60
            border border-red-500/30
            backdrop-blur-xl
            animate-redPulse
          "
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Start Your <span className="text-red-500">Free Trial</span>
            </h1>
            <p className="text-gray-400">
              Get 14 days of full Red Eagle platform access
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="John Doe"
                        className="
                          bg-black/40 border-white/20
                          text-white placeholder:text-gray-500
                          focus:border-red-500 focus:ring-red-500/30
                        "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Mobile */}
              <div className="grid grid-cols-3 gap-4">
                {/* Country Code */}
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Code</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="bg-black/40 border-white/20 text-white">
                            <SelectValue placeholder="🌍 Code" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black border-white/20">
                          {countryCodes.map((c) => (
                            <SelectItem
                              key={c.code}
                              value={c.code}
                              className="text-white hover:bg-red-500/10"
                            >
                              {c.label} ({c.code})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Mobile Number */}
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel className="text-gray-300">
                        Mobile Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="10 digit number"
                          maxLength={10}
                          className="
                            bg-black/40 border-white/20
                            text-white placeholder:text-gray-500
                            focus:border-red-500 focus:ring-red-500/30
                          "
                          onChange={(e) =>
                            field.onChange(e.target.value.replace(/\D/g, ""))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="you@company.com"
                        className="
                          bg-black/40 border-white/20
                          text-white placeholder:text-gray-500
                          focus:border-red-500 focus:ring-red-500/30
                        "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="
                  w-full py-6 text-lg font-bold
                  bg-red-600 hover:bg-red-700
                  shadow-[0_0_35px_rgba(221,20,20,0.55)]
                  hover:scale-[1.02] transition
                "
              >
                Start Free Trial
              </Button>

              <p className="text-center text-xs text-gray-400">
                No credit card required • Cancel anytime
              </p>
            </form>
          </Form>
        </Card>
      </section>

      {/* Heartbeat glow animation */}
      <style>
        {`
          @keyframes redPulse {
            0% {
              box-shadow: 
                0 0 25px rgba(221,20,20,0.25),
                0 0 50px rgba(221,20,20,0.15);
            }
            40% {
              box-shadow: 
                0 0 45px rgba(221,20,20,0.55),
                0 0 90px rgba(221,20,20,0.35);
            }
            70% {
              box-shadow: 
                0 0 30px rgba(221,20,20,0.35),
                0 0 60px rgba(221,20,20,0.2);
            }
            100% {
              box-shadow: 
                0 0 25px rgba(221,20,20,0.25),
                0 0 50px rgba(221,20,20,0.15);
            }
          }

          .animate-redPulse {
            animation: redPulse 3.2s ease-in-out infinite;
          }
        `}
      </style>

      <RedFooter />
    </div>
  );
};

export default TrialSignup;
