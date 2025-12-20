import { useRef, useState } from 'react'
import { Upload, X, FileText } from 'lucide-react'

interface FileUploadProps {
  label: string
  accept?: string
  maxSize?: number // in bytes
  onChange: (file: File | null) => void
  value?: File | string | null
  error?: string
  required?: boolean
  helperText?: string
}

export default function FileUpload({
  label,
  accept = '.pdf,.doc,.docx',
  maxSize = 5 * 1024 * 1024, // 5MB default
  onChange,
  value,
  error,
  required,
  helperText
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.size > maxSize) {
      alert(`File size must be less than ${(maxSize / (1024 * 1024)).toFixed(1)}MB`)
      return
    }
    onChange(file)
  }

  const handleRemove = () => {
    onChange(null)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const getFileName = () => {
    if (value instanceof File) {
      return value.name
    }
    if (typeof value === 'string' && value) {
      return value.split('/').pop() || value
    }
    return null
  }

  const fileName = getFileName()
  const inputId = `file-upload-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2" htmlFor={inputId}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {!fileName ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
            dragActive
              ? 'border-ahc-green bg-green-50 dark:bg-green-900/10'
              : error
              ? 'border-red-500'
              : 'border-gray-300 dark:border-gray-600 hover:border-ahc-green'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          role="button"
          tabIndex={0}
          aria-label={`Upload ${label}`}
        >
          <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" aria-hidden="true" />
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Drag and drop or click to upload
          </p>
          <p className="text-xs text-gray-500">
            Accepted: {accept.replace(/\./g, '').toUpperCase()} • Max: {(maxSize / (1024 * 1024)).toFixed(1)}MB
          </p>
          <input
            ref={inputRef}
            id={inputId}
            type="file"
            accept={accept}
            onChange={handleChange}
            className="hidden"
            aria-label={label}
          />
        </div>
      ) : (
        <div className="border rounded-lg p-4 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-ahc-green" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium">{fileName}</p>
              {value instanceof File && (
                <p className="text-xs text-gray-500">
                  {(value.size / 1024).toFixed(1)} KB
                </p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
            aria-label={`Remove ${label}`}
          >
            <X className="w-5 h-5 text-gray-500" aria-hidden="true" />
          </button>
        </div>
      )}

      {helperText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
}
