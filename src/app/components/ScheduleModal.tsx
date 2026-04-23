import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface ScheduleModalProps {
  user: {
    name: string;
  };
  onClose: () => void;
}

export default function ScheduleModal({ user, onClose }: ScheduleModalProps) {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeSlots = [
    { time: "9:00 AM", available: [true, true, false, true, true, true, false] },
    { time: "11:00 AM", available: [true, false, true, true, false, true, true] },
    { time: "2:00 PM", available: [false, true, true, false, true, true, true] },
    { time: "4:00 PM", available: [true, true, true, true, true, false, false] },
    { time: "7:00 PM", available: [true, true, true, true, true, false, false] },
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Schedule with {user.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Green indicates available time slots. Red indicates busy.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-2 text-sm">Time</th>
                  {daysOfWeek.map((day) => (
                    <th key={day} className="p-2 text-sm text-center">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((slot, slotIndex) => (
                  <tr key={slotIndex} className="border-t">
                    <td className="p-2 text-sm">{slot.time}</td>
                    {slot.available.map((isAvailable, dayIndex) => (
                      <td key={dayIndex} className="p-2">
                        <div
                          className={`w-full h-8 rounded ${
                            isAvailable
                              ? "bg-green-500 hover:bg-green-600 cursor-pointer"
                              : "bg-red-500 cursor-not-allowed"
                          }`}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500">
            Click on a green slot to request a meeting
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

