import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { z } from 'zod'
import Button from './Button'
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
  Grid,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider
} from '@mui/material'
import { Close } from '@mui/icons-material'

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phone: z
    .string()
    .regex(/^\d{10,15}$/, 'Enter 10-15 digit number'),
  organization: z.string().min(2, 'Organization required'),
  role: z.string().min(2, 'Your role is required'),
  interest: z.string().min(2, 'Please select an interest'),
  message: z.string().min(10, 'Tell us a bit more (min 10 chars)'),
})

const defaultValues = {
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  role: '',
  interest: '',
  message: '',
}

const GlobalLeadForm = () => {
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState(defaultValues)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-lead-form', handler)
    return () => window.removeEventListener('open-lead-form', handler)
  }, [])

  const onClose = () => {
    setOpen(false)
    setErrors({})
  }

  const update = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      const onlyDigits = value.replace(/\D/g, '').slice(0, 15)
      setValues((v) => ({ ...v, phone: onlyDigits }))
      return
    }
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const result = schema.safeParse(values)
    if (!result.success) {
      const fieldErrors = {}
      result.error.issues.forEach((iss) => {
        fieldErrors[iss.path[0]] = iss.message
      })
      setErrors(fieldErrors)
      toast.error('Please fix the highlighted fields')
      return
    }
    // submit payload (e.g., API) — for now just log and toast
    // console.log('Lead captured:', result.data)
    toast.success('Thanks! Our team will reach out shortly')
    setValues(defaultValues)
    setErrors({})
    setOpen(false)
  }

  const fieldClass = 'w-full rounded-xl border border-orange-200 focus:border-[#ff6a21] focus:ring-2 focus:ring-[#ff6a21]/20 px-3 py-2.5 outline-none bg-white'
  const labelClass = 'block text-sm font-semibold text-gray-800 mb-1'
  const errorClass = 'mt-1 text-xs text-red-600'

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center p-3 sm:p-4 pt-24 md:pt-28">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl promo-pop max-h-[calc(100vh-8rem)] flex flex-col">
        <div className="sticky top-0 bg-gradient-to-r from-[#ff9b59] to-[#ff6a21] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 z-10 flex items-center justify-between gap-3">
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight">Tell us about your school</div>
            <div className="opacity-90 text-xs sm:text-sm md:text-base">Get a personalized demo of Zeniushub’s modern online system</div>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="text-white/90 hover:text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/20 hover:bg-white/30"
          >
            ✕
          </button>
        </div>

        <form onSubmit={onSubmit} className="px-6 sm:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 overflow-y-auto">
          <div>
            <label className={labelClass}>Full name</label>
            <input name="fullName" value={values.fullName} onChange={update} className={fieldClass} placeholder="John Doe" />
            {errors.fullName && <div className={errorClass}>{errors.fullName}</div>}
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" name="email" value={values.email} onChange={update} className={fieldClass} placeholder="john@email.com" />
            {errors.email && <div className={errorClass}>{errors.email}</div>}
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input name="phone" value={values.phone} onChange={update} className={fieldClass} placeholder="98xxxxxxxx" inputMode="numeric" pattern="[0-9]*" maxLength={15} />
            {errors.phone && <div className={errorClass}>{errors.phone}</div>}
          </div>
          <div>
            <label className={labelClass}>Organization</label>
            <input name="organization" value={values.organization} onChange={update} className={fieldClass} placeholder="School / College" />
            {errors.organization && <div className={errorClass}>{errors.organization}</div>}
          </div>
          <div>
            <label className={labelClass}>Your role</label>
            <input name="role" value={values.role} onChange={update} className={fieldClass} placeholder="Principal / Admin / Owner" />
            {errors.role && <div className={errorClass}>{errors.role}</div>}
          </div>
          <div>
            <label className={labelClass}>Interest</label>
            <select name="interest" value={values.interest} onChange={update} className={fieldClass}>
              <option value="">Select</option>
              <option value="admissions">Admissions</option>
              <option value="attendance">Attendance</option>
              <option value="exams-results">Exams & Results</option>
              <option value="fees">Fees & Accounting</option>
              <option value="transport">Transport / Hostel</option>
              <option value="library">Library / Inventory</option>
              <option value="communication">Communication / Parent App</option>
              <option value="analytics">Analytics & Reports</option>
              <option value="full-suite">Full ERP Suite</option>
            </select>
            {errors.interest && <div className={errorClass}>{errors.interest}</div>}
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Message</label>
            <textarea name="message" value={values.message} onChange={update} rows={4} className={fieldClass} placeholder="Briefly describe your needs" />
            {errors.message && <div className={errorClass}>{errors.message}</div>}
          </div>

          <div className="sm:col-span-2 flex items-center justify-between pt-2">
            <div className="text-xs text-gray-500">By submitting, you agree to be contacted by Zeniushub.</div>
           <Button text='Submit' type="submit" variant='normal'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GlobalLeadForm


