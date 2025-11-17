import Protected from '../components/Protected'

export default function Dashboard() {
  return (
    <Protected>
      <div style={{backgroundColor: 'rgb(255, 253, 246)'}}><div className="container py-12 md:py-16">
        <h1 className="text-2xl font-bold mb-4">Partner Dashboard</h1>
        <p className="text-slate-600">This is a placeholder for partner/admin tools. After login you can add role-based widgets here.</p>
      </div>
      </div>
    </Protected>
  )
}
