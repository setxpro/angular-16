import { inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, map } from "rxjs"; // map do rxjs

export function getParamsId(): Observable<string> {
  const activateRoute = inject(ActivatedRoute)
  return activateRoute.params.pipe(
    map(params => params['id'])
  )
}
