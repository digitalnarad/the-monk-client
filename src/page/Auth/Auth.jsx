import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Palette,
  Mail,
  Lock,
  User,
  Loader2,
  ArrowLeft,
  Star,
  Shield,
  Zap,
} from "lucide-react";
import { ModeToggle } from "./Home/ModeToggle";
import { Card, CardContent, CardHeader, CardTitle } from "../../component/card";
import { Button } from "../../component/button";
import { Label } from "../../component/label";
import { Badge } from "../../component/badge";
import { GalleryInput } from "../../component/input";

// Your existing validation schemas
const signInSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const signUpSchema = Yup.object({
  fName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  termsAccepted: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const Auth = ({ initialMode }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState(initialMode);

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
    validationSchema: mode === "signin" ? signInSchema : signUpSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      const signInData = { email: values.email, password: values.password };
      const signUpData = {
        fName: values.fName,
        lName: values.lName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        termsAccepted: values.termsAccepted,
      };
      const formData = mode === "signin" ? signInData : signUpData;
      console.log(`${mode} data:`, formData);
      setTimeout(() => setSubmitting(false), 2000);
    },
  });

  const toggleMode = () => {
    const newMode = mode === "signin" ? "signup" : "signin";
    setMode(newMode);
    formik.resetForm();
    navigate(`/${newMode}`, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Your existing header - unchanged */}
      <header
        className="glass-effect border-b border-white/10"
        style={{ height: "5rem" }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Palette className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
              ArtCanvas
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link to="/">
              <Button variant="ghost" size="sm" className="hover:bg-accent/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Your existing main content - unchanged */}
      <div
        className="container mx-auto px-6 py-16 w-full flex align-middle"
        style={{ minHeight: "calc(100vh - 5rem)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Your existing left side - unchanged */}
          <div className="space-y-8">
            <div>
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 glass-effect border-primary/30 text-primary"
              >
                ✨ Join ArtCanvas Community
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
                  {mode === "signin" ? "Welcome Back" : "Start Your Journey"}
                </span>
                <br />
                <span className="text-foreground">
                  {mode === "signin" ? "to ArtCanvas" : "with Digital Art"}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {mode === "signin"
                  ? "Access your collection and continue discovering stunning digital artwork for your space."
                  : "Join thousands of art lovers who transform their spaces with premium digital artwork."}
              </p>
            </div>

            {/* Your existing features - unchanged */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 glass-effect rounded-2xl border border-border/20 transition-all duration-300 hover:border-primary/20 cursor-pointer group transform hover:-translate-y-2 hover:scale-105">
                <div className="relative glass-effect w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/10">
                  <Zap className="h-6 w-6 text-primary " />
                  {/* <div className="absolute glass-effect top-0 left-0 rounded-xl w-full h-full opacity-0 group-hover:opacity-100 group-hover:animate-spin-clockwise-360-infinite-slow transition-all duration-300"></div> */}
                </div>
                <h3 className="font-semibold mb-2">Instant Access</h3>
                <p className="text-sm text-muted-foreground">
                  Download immediately after purchase
                </p>
              </div>

              <div className="text-center p-6 glass-effect transform hover:-translate-y-2 hover:scale-105 rounded-2xl border border-border/20 transition-all duration-300 hover:border-primary/20 cursor-pointer group">
                <div className="relative glass-effect w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/10">
                  <Star className="h-6 w-6 text-primary group-hover:animate-spin-clockwise-360-infinite-slow transition-all duration-300" />
                </div>
                <h3 className="font-semibold mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">
                  300 DPI resolution artwork
                </p>
              </div>

              <div className="text-center p-6 glass-effect transform hover:-translate-y-2 hover:scale-105 rounded-2xl border border-border/20 transition-all duration-300 hover:border-primary/20 cursor-pointer group">
                <div className="w-12 h-12 relative glass-effect bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Full License</h3>
                <p className="text-sm text-muted-foreground">
                  Commercial use included
                </p>
              </div>
            </div>

            {/* Your existing stats - unchanged */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Artworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Your existing form card - only inputs changed */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md glass-effect border-border/20">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                  {mode === "signin" ? "Sign In" : "Create Account"}
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  {mode === "signin"
                    ? "Enter your credentials to access your account"
                    : "Join ArtCanvas and start your collection today"}
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="space-y-6 grid gap-4">
                    {/* Name Fields - using new Gallery Input */}
                    {mode === "signup" && (
                      <div className="grid grid-cols-2 gap-4">
                        <GalleryInput
                          label="First Name"
                          name="fName"
                          value={formik.values.fName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.fName && formik.errors.fName}
                        />
                        <GalleryInput
                          label="Last Name"
                          name="lName"
                          value={formik.values.lName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.lName && formik.errors.lName}
                        />
                      </div>
                    )}

                    {/* Email - using new Gallery Input */}
                    <GalleryInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && formik.errors.email}
                    />

                    {/* Password - using new Gallery Input */}
                    <GalleryInput
                      label="Password"
                      name="password"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.password && formik.errors.password}
                    />

                    {/* Confirm Password - using new Gallery Input */}
                    {mode === "signup" && (
                      <div>
                        <GalleryInput
                          label="Confirm Password"
                          name="confirmPassword"
                          type="password"
                          value={formik.values.confirmPassword}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.confirmPassword &&
                            formik.errors.confirmPassword
                          }
                        />

                        {/* Terms - keeping your original checkbox */}
                        <div className="space-y-2 mt-6">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="termsAccepted"
                              name="termsAccepted"
                              checked={formik.values.termsAccepted}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className="w-4 h-4 text-primary bg-transparent transition-all duration-300"
                            />
                            <Label
                              htmlFor="termsAccepted"
                              className="text-sm text-muted-foreground"
                            >
                              I agree to the{" "}
                              <Link
                                to="/terms"
                                className="text-primary hover:text-primary/80 underline underline-offset-2"
                              >
                                Terms & Conditions
                              </Link>{" "}
                              and{" "}
                              <Link
                                to="/privacy"
                                className="text-primary hover:text-primary/80 underline underline-offset-2"
                              >
                                Privacy Policy
                              </Link>
                            </Label>
                          </div>
                          {formik.touched.termsAccepted &&
                            formik.errors.termsAccepted && (
                              <li className="text-accent-foreground text-xs mt-0 text-left P-0 M-0 text-shadow">
                                {formik.errors.termsAccepted}
                              </li>
                            )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Your existing button - unchanged */}
                  <Button
                    type="submit"
                    className="relative overflow-hidden border-primary/30 transition-all duration-300 group w-full"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {mode === "signin"
                          ? "Signing in..."
                          : "Creating account..."}
                      </>
                    ) : mode === "signin" ? (
                      "Sign In"
                    ) : (
                      "Create Account"
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </Button>

                  {/* Your existing toggle - unchanged */}
                  <div className="text-center pt-6 border-t border-border/20">
                    <p className="text-sm text-muted-foreground">
                      {mode === "signin"
                        ? "Don't have an account?"
                        : "Already have an account?"}
                      <button
                        type="button"
                        onClick={toggleMode}
                        className="ml-2 text-primary hover:text-primary/80 font-medium transition-all duration-300 underline underline-offset-2 hover:translate-x-[2px]"
                      >
                        {mode === "signin" ? "Sign up here" : "Sign in here"}
                      </button>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-effect {
          backdrop-filter: blur(12px);
        }
        .glow-effect {
          box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.4);
        }
      `}</style>
    </div>
  );
};

export default Auth;
