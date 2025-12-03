import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  countryCode: z.string().min(1, { message: "Please select a country code" }),
  mobile: z.string()
    .length(10, { message: "Mobile number must be exactly 10 digits" })
    .regex(/^[0-9]+$/, { message: "Mobile number must contain only digits" }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .refine((email) => email.includes("@"), { message: "Email must contain @" }),
});

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
      title: "Success!",
      description: "Your trial request has been submitted successfully.",
    });
  };

  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+971", country: "UAE" },
    { code: "+65", country: "Singapore" },
  ];

  return (
    <div className="min-h-screen red-eagle-theme" style={{ backgroundColor: 'hsl(var(--eagle-bg))' }}>
      
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
        {/* Background effects */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, hsl(0 0% 4%) 0%, hsl(0 0% 7%) 50%, hsl(0 0% 5%) 100%)'
        }}></div>
        
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15" style={{
          background: 'radial-gradient(circle, #dd1414 0%, transparent 70%)'
        }}></div>

        <div className="container mx-auto max-w-2xl relative z-10">
          <Card className="p-8 md:p-12 backdrop-blur-md" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'rgba(229, 217, 217, 0.2)',
          }}>
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'hsl(var(--eagle-text-bright))' }}>
                Start Your <span style={{ color: '#dd1414' }}>Free Trial</span>
              </h1>
              <p className="text-lg" style={{ color: 'hsl(var(--eagle-text-muted))' }}>
                Get started with 14 days of full platform access
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: 'hsl(var(--eagle-cream))' }}>Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field}
                          className="bg-black/30 border-white/20 text-white placeholder:text-white/40"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel style={{ color: 'hsl(var(--eagle-cream))' }}>Code</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/30 border-white/20 text-white">
                              <SelectValue placeholder="Code" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black/95 border-white/20">
                            {countryCodes.map((item) => (
                              <SelectItem 
                                key={item.code} 
                                value={item.code}
                                className="text-white hover:bg-white/10 focus:bg-white/10"
                              >
                                {item.code}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel style={{ color: 'hsl(var(--eagle-cream))' }}>Mobile Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter 10 digit number" 
                            {...field}
                            maxLength={10}
                            className="bg-black/30 border-white/20 text-white placeholder:text-white/40"
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: 'hsl(var(--eagle-cream))' }}>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email address" 
                          type="email"
                          {...field}
                          className="bg-black/30 border-white/20 text-white placeholder:text-white/40"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full text-lg font-bold py-6 border-0 hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: '#dd1414',
                    color: '#e5d9d9',
                    boxShadow: '0 4px 20px rgba(221, 20, 20, 0.3)'
                  }}
                >
                  Start Free Trial
                </Button>

                <p className="text-center text-sm" style={{ color: 'hsl(var(--eagle-text-muted))' }}>
                  No credit card required • Cancel anytime
                </p>
              </form>
            </Form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrialSignup;