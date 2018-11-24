import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FormComponent} from "./form.component";
import {reactiveFormComponent} from "./components/reactive/reactiveForm";

const routes: Routes = [
    {
        path: '',
        component: FormComponent,
        children: [
            {path: '', redirectTo: '', pathMatch: 'full'},
            {path: 'reactive', component: reactiveFormComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class FormRouting {
}
