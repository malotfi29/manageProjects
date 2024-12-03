function ConfirmDelete({ resourceName, onClose, disabled,onConfimed }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">
        آیا از حذف {resourceName} مطمین هستید؟
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          onClick={onConfimed}
          disabled={disabled}
          className="btn btn--danger py-3 flex-1"
        >
          تایید
        </button>
        <button
          onClick={onClose}
          disabled={disabled}
          className="btn btn--primary flex-1"
        >
          لغو
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
