import { CheckCircle2, Info, X } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dismissToast, selectToast } from '../../redux/slices/uiSlice'

const TOAST_DURATION = 4200

function Toast() {
  const dispatch = useDispatch()
  const toast = useSelector(selectToast)

  useEffect(() => {
    if (!toast) {
      return undefined
    }

    const timeout = window.setTimeout(
      () => dispatch(dismissToast()),
      TOAST_DURATION,
    )

    return () => window.clearTimeout(timeout)
  }, [toast, dispatch])

  if (!toast) {
    return null
  }

  const Icon = toast.tone === 'info' ? Info : CheckCircle2

  return (
    <div
      className={`toast toast--${toast.tone}`}
      role="status"
      aria-live="polite"
    >
      <Icon size={19} aria-hidden="true" />
      <p>{toast.message}</p>
      <button
        type="button"
        onClick={() => dispatch(dismissToast())}
        aria-label="Dismiss notification"
      >
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  )
}

export default Toast
